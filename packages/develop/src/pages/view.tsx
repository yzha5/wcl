import { Button } from '../pkgs/components/button/src'
import Container from '../pkgs/components/container/src'
import View from '../pkgs/components/view/src'

export default function ViewPage() {
    return (
        <Container>
            <View style={{ backgroundColor: 'red' }}>view</View>
            <View style={{ border: 'solid 1px gray' }} gap={16}>
                <View style={{ backgroundColor: '#d8ef33' }}>view</View>
                <View style={{ backgroundColor: '#d8efe3' }}>view</View>
                <View style={{ backgroundColor: '#d8ef33' }}>view</View>
                <View style={{ backgroundColor: '#d8efe3' }}>view</View>
            </View>
            <View style={{ padding: 8, border: 'solid 1px gray' }} horizontal gap={16}>
                <View style={{ backgroundColor: '#d8ef33' }}>view</View>
                <View grow style={{ backgroundColor: '#d8efe3' }}>
                    view
                </View>
                <View grow style={{ backgroundColor: '#d8ef33' }}>
                    view
                </View>
                <View style={{ backgroundColor: '#d8efe3' }}>view</View>
            </View>
            <View horizontal gap={16} style={{ justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: '#d8ef33' }}>view</View>
                <View style={{ backgroundColor: '#d8efe3' }}>view</View>
            </View>
            <View gap={16}>
                <View style={{ backgroundColor: '#d8ef33' }} hideUp='md'>
                    hide up md
                </View>
                <View style={{ backgroundColor: '#d8efe3' }} hideDown='md'>
                    hide down md
                </View>
            </View>
        </Container>
    )
}
