
import { View, Text, TextInput, ScrollView } from 'react-native';
import { data } from './data';

export default function Blog() {
    return (
        <>
            <ScrollView>

            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#000',paddingBottom:70 }}>
                <Text style={{ margin: 45, fontSize: 26, color: '#fff' }}>Daily Blog</Text>

                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderWidth:1,height:40,borderRadius:5,borderColor:'white',padding:1}}>
                    <TextInput style={{ backgroundColor: 'rgba(0,0,0,0.1)', width: 200, padding: 5, borderRadius: 5,borderWidth:1,borderColor:'blue',color:'white' }} placeholder='Search...' placeholderTextColor={'#fff'} />
                </View>

                <View style={{ marginTop: 100 ,gap:20}}>
                    {data.map((item) => {
                        return (
                            <View style={{backgroundColor: 'rgba(255,255,255,0.2)',width:200,height:120,justifyContent: 'center',borderRadius:5}} key={item.id}>
                                <Text style={{ color: '#fff', textAlign: 'center'}}>{item.title}</Text>
                                <Text style={{ color: '#fff',textAlignVertical: 'center', textAlign: 'center' }}>{item.content}</Text>
                            
                            </View>
                        )
                    })}
                </View>
            </View>
            </ScrollView>
        </>
    );
}