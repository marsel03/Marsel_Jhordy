import React from 'react';
import { Text, Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{backgroundColor:'#0ff'}}>
            <Text></Text>
            <Button
                title="Menu Makanan"
                onPress={() => navigation.navigate('Makan')}
            />
            <Text></Text>
            <Button
                title="Menu Minuman"
                onPress={() => navigation.navigate('Minum')}
            />
            <Text style={{marginVertical: 400}}></Text>
        </View>
    );
};

export default HomeScreen;