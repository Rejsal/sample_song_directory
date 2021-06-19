import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SongCard from '../../components/song';
import HeaderView from '../../components/header';
import constants from '../../helper/constants';

function SongList() {
  const {song: songModel} = useSelector(({song}) => {
    return {
      song,
    };
  });
  const {song: songDispatch} = useDispatch(({song}) => {
    return {
      song,
    };
  });

  const {getSongs, setSong} = songDispatch;

  const navigation = useNavigation();

  useEffect(() => {
    getSongs();
  }, []);

  function _renderHeader() {
    return <View style={styles.listHeader} />;
  }

  function _itemSeperator() {
    return <View style={styles.seperator} />;
  }

  const {loading = false, songs = []} = songModel;
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea} />
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <HeaderView title={'SONGS'} />
          {loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size={'large'} />
            </View>
          ) : songs.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={songs}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={_renderHeader}
              ItemSeparatorComponent={_itemSeperator}
              renderItem={({item}) => (
                <SongCard
                  item={item}
                  onClickCard={async data => {
                    await setSong(data);
                    navigation.navigate('ViewSong');
                  }}
                />
              )}
            />
          ) : (
            <View style={styles.loaderContainer}>
              <Text>No songs to display</Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 0,
    backgroundColor: constants.primaryColor,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listHeader: {
    height: 16,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#990000',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: '#e4e4e4',
  },
});

export default SongList;
