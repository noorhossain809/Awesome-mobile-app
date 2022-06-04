import {View,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    StyleSheet,
    Pressable
} from 'react-native';
import Text from '../components/text/Text';
import { colors } from '../theme/colors';
import img from '../../assets/images/Media.png'
import { spacing } from '../theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function ProductDetails(){
    return(
        <SafeAreaView style={{marginTop: Platform.OS === "android"? StatusBar.currentHeight:0, flex: 1, backgroundColor: colors.black}}>
         <ScrollView>
            <View style={{height: 230}}>
            <Image source={img} style={styles.top_img}  /> 
            </View>
            <View style={styles.details}>
               <Text preset="h1" style={{fontWeight: "700"}}>Boston Lettuce</Text>
               <View style={{flexDirection: 'row'}}>
                   <Text preset="h1" style={{fontWeight: "700",letterSpacing: -0.802917,lineHeight: 43}}>1.10</Text>
                   <Text preset="h4" style={{color: colors.secondary, fontSize: spacing[6], fontWeight: "400", lineHeight: 43, textAlign: 'center', left: spacing[2]}}>€ / piece</Text>
               </View>
               <Text preset="h4" style={{color:colors.green, fontWeight: "700", letterSpacing: -0.41, lineHeight: 40}}>~ 150 gr / piece</Text>
               <Text preset="h1" style={{fontWeight: "700",letterSpacing: -0.802917,lineHeight: 43, fontSize: 24}}>Spain</Text>
               <Text preset="h4" style={styles.description}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
               <View style={{flexDirection: 'row', alignItems: 'center',marginTop: spacing[4] }}>
               <View style={styles.icons}>
               <AntDesign name="hearto" size={24} color={colors.secondary} />
               </View>
               <Pressable style={styles.button}>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <Ionicons name="ios-cart-outline" size={24} color={colors.white} style={{right: spacing[1]}} />
            <Text preset="h4" style={styles.text}>add to cart</Text>
               </View>
          </Pressable>
               </View>
            </View>

        </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    top_img:{
        opacity: 3.5
    },
    details:{
        backgroundColor: colors.grey,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: spacing[8]
    },
    description:{
             
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
        paddingHorizontal: 40,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: colors.green,
       left: spacing[1] 
        
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '600',
        
        color: 'white',
        letterSpacing: -0.01,
        textTransform: 'uppercase'
      },
      icons:{
        backgroundColor: colors.white,
        paddingHorizontal: 29,
        paddingVertical: 12,
        border: 1,
        borderColor: colors.secondary,
        borderRadius: 10, 
        right: spacing[1],
       
       
      }

})