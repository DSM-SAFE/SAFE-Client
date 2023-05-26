import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {CommunityListItem} from '../../components/community';

interface Community {
  title: string;
}

const CommunityScreen = () => {
  const [dummy, setDummy] = useState<Community[]>([]);

  useEffect(() => {
    setDummy([
      {
        title: '반가워요',
      },
      {
        title: '안녕하세요',
      },
      {
        title: '정말 신기해요!',
      },
      {
        title: '그냥 싶어요!',
      },
    ]);
  }, []);

  return (
    <ScrollView>
      {dummy.map((item: Community) => {
        const {title} = item;
        return (
          <CommunityListItem title={title} onPress={() => console.log(title)} />
        );
      })}
    </ScrollView>
  );
};

export default CommunityScreen;
