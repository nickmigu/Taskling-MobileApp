import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your API URL

export default function HomeScreen() {
  const [responseData, setResponseData] = useState<any>(null);
  const [apiStatus, setApiStatus] = useState<string>(''); // For tracking API status (loading, success, error)

  const fetchUsers = async () => {
    setApiStatus('Loading users...'); // Set status to loading when fetching users
    try {
      const response = await axios.get(`${API_URL}/users`);
      setResponseData(response.data);
      setApiStatus('Users fetched successfully!');
      console.log('Users:', response.data); // You can still log data to the console
    } catch (error) {
      setApiStatus('Error fetching users');
      console.error('Error fetching users:', error);
    }
  };

  const fetchPosts = async () => {
    setApiStatus('Loading posts...'); // Set status to loading when fetching posts
    try {
      const response = await axios.get(`${API_URL}/posts`);
      setResponseData(response.data);
      setApiStatus('Posts fetched successfully!');
      console.log('Posts:', response.data); // You can still log data to the console
    } catch (error) {
      setApiStatus('Error fetching posts');
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
      {/* Button to fetch users */}
      <Button title="Fetch Users" onPress={fetchUsers} />

      {/* Button to fetch posts */}
      <Button title="Fetch Posts" onPress={fetchPosts} />

      {/* Display the API status */}
      {apiStatus && <Text>{apiStatus}</Text>}

      {/* Display the response data */}
      {responseData && (
        <View>
          <Text>{JSON.stringify(responseData, null, 2)}</Text>
        </View>
      )}
    </View>
  );
}
