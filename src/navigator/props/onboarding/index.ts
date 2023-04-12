import {StackNavigationProp} from '@react-navigation/stack';
import {RootScreens, RootStackList} from '../../stack';

type OnboardingScreenNavigationProps = StackNavigationProp<
  RootStackList,
  RootScreens.Onboarding
>;

export default interface OnboardingScreenProps {
  navigation: OnboardingScreenNavigationProps;
}
