import React, { PureComponent } from 'react';
import {  View } from 'react-native';
import { Text, TouchableRipple, withTheme } from 'react-native-paper';

import type { TrackType } from '../api/types';
import type { ThemeType } from '../theme/theme';
import {StyleTrackItem} from '../styles/StyleTrackItem';

type Props = {
    selectedId: string,
    theme: ThemeType,
    track: TrackType,
    onTrackSelected: (track: TrackType) => void,
};

class TrackItem extends PureComponent<Props> {
    onTrackSelected = () => {
        this.props.onTrackSelected(this.props.track);
    };

    render() {
        const { selectedId, theme, track } = this.props;
        const { artists, name } = track;
        const artist = artists[0];

        return (
            <TouchableRipple
                rippleColor={theme.colors.ripple}
                onPress={this.onTrackSelected}
            >
                <View style={StyleTrackItem.container}>
                    <View
                        style={[
                            StyleTrackItem.selected,
                            selectedId === track.id && {
                                backgroundColor: theme.colors.primary,
                            },
                        ]}
                    />
                    <View style={StyleTrackItem.content}>
                        <Text
                            numberOfLines={2}
                            style={[StyleTrackItem.title, { fontFamily: theme.fonts.medium }]}
                        >
                            {name}
                        </Text>
                        <Text
                            numberOfLines={2}
                            style={[
                                StyleTrackItem.artist,
                                {
                                    color: theme.colors.secondaryText,
                                    fontFamily: theme.fonts.medium,
                                },
                            ]}
                        >
                            {artist.name.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </TouchableRipple>
        );
    }
}

export default withTheme(TrackItem);