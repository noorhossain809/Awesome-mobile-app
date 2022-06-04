import {View, 
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    StyleSheet,
    Pressable
} from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import logo from '../../assets/images/D.png'
import Text from '../components/text/Text';
import vactor from '../../assets/images/Vector.png'
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{marginTop: Platform.OS === "android"? StatusBar.currentHeight:0, flex: 1, backgroundColor: colors.black}}>
            <View style={{backgroundColor: colors.indigo, height: 280}}>
            <View style={styles.brand}>
            <Image source={logo} style={styles.logo} /> 
            </View>
            
            </View>
            <View style={styles.second}>
            <View style={styles.bgVactor}>
            <Image source={vactor} style={styles.logo} /> 
            </View>
                <Text preset="h1" style={{textAlign: 'center',fontWeight: "700"}}>Non-Contact Deliveries</Text>
            <Text preset="h4" style={styles.des}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>
            <Pressable style={styles.button}
            onPress={() => {navigation.navigate('Details')}}
            >
            <Text preset="h4" style={styles.text}>order now</Text>
          </Pressable>
          <Text preset="h4" style={styles.dismiss}>dismiss</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    brand:{
        backgroundColor: colors.pink,
        width: 100,
        height: 100,
        borderRadius: 50,
        left: 25,
        marginTop: spacing[8]

    },
    logo:{
        width: 40,
         height: 40,
         margin: spacing[7]
         
         },
         second:{
             backgroundColor: colors.grey,
             borderTopRightRadius: 20,
             borderTopLeftRadius: 20,
             bottom: spacing[5],
             padding: spacing[8]
         },
         bgVactor:{
             backgroundColor: colors.white,
             width: 100,
            height: 100,
            borderRadius: 50, 
            alignItems: 'center',
            justifyContent: 'center',
            left: 100
         },
         des:{
             textAlign: 'center',
             letterSpacing: -0.41,
             color: colors.secondary,
             lineHeight: 22,
             marginTop: spacing[2],
             fontSize: 15
         },
         button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 8,
            elevation: 3,
            backgroundColor: colors.green,
            marginTop: spacing[6]
            
          },
          text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: '600',
            
            color: 'white',
            letterSpacing: -0.01,
            textTransform: 'uppercase'
          },
          dismiss:{
               textAlign: 'center',
               marginTop: spacing[6],
               lineHeight: 18,
               letterSpacing: -0.01,
               textTransform: 'uppercase',
               fontWeight: '600',
               color: colors.secondary
          }
})