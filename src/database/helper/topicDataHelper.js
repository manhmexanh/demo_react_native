import {firestore} from 'react-native-firebase';

export const collectionCource =() => {
    firestore().collection('course')
};