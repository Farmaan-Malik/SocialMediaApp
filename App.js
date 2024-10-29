import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Title from './components/title/title';

import globalStyles from './assets/styles/globalStyles';
import TouchableMessage from './components/TouchableMessage';
import StoryView from './components/StoryView/StoryView';
const App = () => {

  const [renderData, setRenderData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [currentStoryPage, setCurrenStoryPage] = useState(1);

const storyPageSize = 4
  const userStories = [
    {
      name: 'Adam',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'Joseph',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'Angel',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'Oliver',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'Barry',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'Cisco',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'Wally',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'Clark',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'Bruce',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      id: 5,
    },
  ];
  const pagination = (database,currentPage,pageSize)=>{
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex,endIndex);
  };

  useEffect(()=>{
    setIsLoading(true)
    const initialData = pagination(userStories,1,storyPageSize);
    setRenderData(initialData)
    setIsLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
        <Title title="Let's Explore" />
        <TouchableMessage />
      </View>
      <View style={globalStyles.storyView}>
        <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          console.log("End Reached")
          if (isLoading) {
            return;
          }
          setIsLoading(true);
          const newData = pagination(userStories,(currentStoryPage + 1),storyPageSize);
          if (newData.length > 0) {
            setCurrenStoryPage(currentStoryPage + 1)
            setRenderData(prev => [...prev, ...newData] )
          }
          setIsLoading(false)
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
          data={renderData}
          renderItem={({item}) => (
            <StoryView key={'Key is' + item.id} firstName={item.name} photo={item.profileImage} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;
