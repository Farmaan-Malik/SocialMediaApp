import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Title from '../../components/title/title';
import TouchableMessage from '../../components/TouchableMessage';
import StoryView from '../../components/StoryView/StoryView';
import UserPost from '../../components/UserPost/UserPost';
import style from './style';
import globalStyles from '../../assets/styles/globalStyles';

const HomeScreen = () => {
  const [renderData, setRenderData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStoryPage, setCurrenStoryPage] = useState(1);

  const [renderPostData, setRenderPostData] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [currentPostPage, setCurrentPostPage] = useState(1);

  const postPageSize = 2;
  const storyPageSize = 4;

  const userStories = [
    {
      name: 'Adam',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      name: 'Joseph',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      name: 'Angel',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      name: 'Oliver',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      name: 'Barry',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      name: 'Cisco',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      name: 'Wally',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      name: 'Clark',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      name: 'Bruce',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
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
      post: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),

      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      post: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      post: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      post: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      post: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    },
  ];
  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoading(true);
    const initialData = pagination(userStories, 1, storyPageSize);
    setRenderData(initialData);
    setIsLoading(false);
    setIsLoading(true);

    const initialPostData = pagination(userPosts, 1, postPageSize);
    setRenderPostData(initialPostData);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <SafeAreaView style={globalStyles.backgroundWhite}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title="Let's Explore" />
                <TouchableMessage />
              </View>
              <View style={style.storyView}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    console.log('End Reached');
                    if (isLoading) {
                      return;
                    }
                    setIsLoading(true);
                    const newData = pagination(
                      userStories,
                      currentStoryPage + 1,
                      storyPageSize,
                    );
                    if (newData.length > 0) {
                      setCurrenStoryPage(currentStoryPage + 1);
                      setRenderData(prev => [...prev, ...newData]);
                    }
                    setIsLoading(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={renderData}
                  renderItem={({item}) => (
                    <StoryView
                      key={'Key is' + item.id}
                      firstName={item.name}
                      photo={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          data={renderPostData}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isPostLoading) {
              return;
            }
            setIsPostLoading(true);
            const newData = pagination(
              userPosts,
              currentPostPage + 1,
              postPageSize,
            );
            if (newData.length > 0) {
              setCurrentPostPage(currentPostPage + 1);
              setRenderPostData(prev => [...prev, ...newData]);
            }
            setIsPostLoading(false);
          }}
          renderItem={({item}) => {
            console.log(item);
            return (
              <UserPost
                key={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                profileImage={item.profileImage}
                location={item.location}
                post={item.post}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
              />
            );
          }}
        />
      </SafeAreaView>
  );
};
export default HomeScreen;
