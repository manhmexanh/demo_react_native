import React, {Component} from 'react'
import { Image, View, Text, TouchableOpacity} from 'react-native';
import {StyleItemRow} from '../../styles/StyleHome';

const ItemRow = ({ item }) => (
    <TouchableOpacity>
        <View style={StyleItemRow.container}>

            <Image source={{ uri: item.avatar!=null ? item.avatar : require('../../assets/img/ic_sound_cloud.png') }} style={StyleItemRow.photo} />
            <View style={StyleItemRow.container_text}>
                <Text style={StyleItemRow.title}>
                    {item.name}
                </Text>
                <Text style={StyleItemRow.description}>
                    {item.shortDescription}
                </Text>
            </View>

        </View>
    </TouchableOpacity>
);

export default ItemRow;