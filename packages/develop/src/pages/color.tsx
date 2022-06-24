import { Button } from '../pkgs/components/button/src'
import Container from '../pkgs/components/container/src'
import View from '../pkgs/components/view/src'
import { useTheme } from '../pkgs/theme'
import { componentColor, darkColor, lightColor, textColor } from '../pkgs/utils'

const colors = [
    'primary',
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'purple',
    'gray',
    '#e974c3',
]
export default function ColorPage() {
    const t = useTheme()
    return (
        <Container>
            <View gap={16}>
                {colors.map((v, i) => {
                    const c = componentColor(v, t)
                    return (
                        <View horizontal gap={16} key={i}>
                            <View
                                style={{
                                    padding: '1rem',
                                    backgroundColor: c,
                                    color: textColor(c),
                                }}
                            >
                                {v}
                            </View>
                            <View
                                style={{
                                    padding: '1rem',
                                    backgroundColor: lightColor(c, t.mode == 'dark'),
                                    color: textColor(lightColor(c, t.mode == 'dark')),
                                }}
                            >
                                {v}.light
                            </View>
                            <View
                                style={{
                                    padding: '1rem',
                                    backgroundColor: darkColor(c, t.mode == 'dark'),
                                    color: textColor(darkColor(c, t.mode == 'dark')),
                                }}
                            >
                                {v}.dark
                            </View>
                        </View>
                    )
                })}
            </View>
        </Container>
    )
}
