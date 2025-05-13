import React, { useState } from 'react';
import { items } from './exampleProducts';
import { useLocalSearchParams } from 'expo-router';
import { Button, Image, Text, View } from 'react-native';
import { RowtLink } from '@/rowt-sdk/Rowt';
import { Share } from 'react-native';

const ProductPage = () => {
  const { id } = useLocalSearchParams();
  const [generatingLink, setGeneratingLink] = useState(false);

  const item = items.find((item) => item.id === id);

  if (!item) {
    return <Text>Item not found</Text>;
  }

  const handleShare = async () => {
    try {
      setGeneratingLink(true);
      if (
        !process.env.EXPO_PUBLIC_ROWT_SERVER_URL ||
        !process.env.EXPO_PUBLIC_ROWT_API_KEY ||
        !process.env.EXPO_PUBLIC_ROWT_PROJECT_ID
      ) {
        console.error('Rowt configuration is missing');
        console.log(
          `ROWT_SERVER_URL: ${process.env.EXPO_PUBLIC_ROWT_SERVER_URL}`
        );
        console.log(`ROWT_API_KEY: ${process.env.EXPO_PUBLIC_ROWT_API_KEY}`);
        console.log(
          `ROWT_PROJECT_ID: ${process.env.EXPO_PUBLIC_ROWT_PROJECT_ID}`
        );
        return;
      }
      const rowt = new RowtLink(
        {
          serverUrl: process.env.EXPO_PUBLIC_ROWT_SERVER_URL as string,
          apiKey: process.env.EXPO_PUBLIC_ROWT_API_KEY as string,
          projectId: process.env.EXPO_PUBLIC_ROWT_PROJECT_ID as string,
        },
        {
          url: `/items/${item.id}`,
          title: item.name,
          description: item.description,
          imageUrl: item.imageUrl,
        }
      );

      const url = await rowt.createLink();
      await Share.share({
        message: url,
      });
    } catch (error) {
      console.error('Error creating link:', error);
    } finally {
      setGeneratingLink(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 60,
      }}
    >
      <Text>{item.name}</Text>
      <Image src={item.imageUrl} alt={item.name} style={{ maxWidth: '100%' }} />
      <Text>{item.description}</Text>
      <Text>{item.content}</Text>

      <Button
        title={generatingLink ? 'Sharing...' : 'Share'}
        disabled={generatingLink}
        onPress={handleShare}
      />
    </View>
  );
};

export default ProductPage;
