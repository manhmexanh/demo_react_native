import React, {Component} from 'react'
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {StyleHome} from '../../styles/StyleHome';
import ItemRow from './ItemRow';
import { connect } from 'react-redux';
import {fetchProducts} from '../../redux/actions/course/courseActions';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        this.props.dispatch(fetchProducts())
    }

    render() {
        return (
            <View style={StyleHome.container}>
                {
                    this.props.error ?
                        <Text>Error! {error.message}</Text> :
                        this.props.isLoading ?
                            <ActivityIndicator size="large" color="#0000ff"/> :
                            <FlatList
                                data={this.props.courses}
                                maxToRenderPerBatch={5}
                                renderItem={({item}) => <ItemRow item={item}/>}
                                keyExtractor={(item, index) => index.toString()}/>}
            </View>
        )
    }

}

const mapStateToProps = state => ({
    courses: state.courses.items,
    isLoading: state.courses.isLoading,
    error: state.courses.error
});

export default connect(mapStateToProps)(Home);
