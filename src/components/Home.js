import React, {Component} from 'react'
import {
    View,
    FlatList,
    Image,
    Text,
    ScrollView
} from 'react-native'
import {StyleHome} from '../styles/StyleHome';
import {mockedData} from '../database/mockData';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    render() {
        console.log(mockedData);
        return (
            <View style={StyleHome.container}>
                <ScrollView>
                    <View style={StyleHome.row}>
                        <FlatList
                            keyExtractor={(item, index) => item.title}
                            data={mockedData}
                            renderItem={({item}) => (<View style ={StyleHome.item}>
                                <Image
                                    source={{uri: item.artwork_url}}
                                    style={StyleHome.image}/>
                            </View>)}
                            horizontal={true}/>
                    </View>
                    <View style={StyleHome.row}>
                        <FlatList
                            keyExtractor={(item, index) => item.title}
                            data={mockedData}
                            renderItem={({item}) => (<View style ={StyleHome.item}>
                                <Image
                                    source={{uri: item.artwork_url}}
                                    style={StyleHome.image}/>
                            </View>)}
                            horizontal={true}/>
                    </View>
                    <View style={StyleHome.row}>
                        <FlatList
                            keyExtractor={(item, index) => item.title}
                            data={mockedData}
                            renderItem={({item}) => (<View style ={StyleHome.item}>
                                <Image
                                    source={{uri: item.artwork_url}}
                                    style={StyleHome.image}/>
                            </View>)}
                            horizontal={true}/>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

