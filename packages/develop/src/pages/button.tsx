import { Button } from '../pkgs/components/button/src'
import Container from '../pkgs/components/container/src'
import View from '../pkgs/components/view/src'

export default function ButtonPage() {
    return (
        <Container>
            <View horizontal wrap gap={16}>
                <Button text='button' />
                <Button text='button' color='primary' />
                <Button text='button' color='success' />
                <Button text='button' color='warn' />
                <Button text='button' color='error' />
                <Button text='button' color='error' disabled />
                <Button text='button' face='outlined' />
                <Button text='button' face='outlined' color='primary' />
                <Button text='button' face='outlined' color='success' />
                <Button text='button' face='outlined' color='warn' />
                <Button text='button' face='outlined' color='error' />
                <Button text='button' face='outlined' color='error' disabled />
            </View>
            <View horizontal wrap gap={16}>
                <Button text='button' size={72} radius={12} />
                <Button text='button' size={72} radius={12} color='primary' />
                <Button text='button' size={72} radius={12} color='success' />
                <Button text='button' size={72} radius={12} color='warn' />
                <Button text='button' size={72} radius={12} color='error' />
                <Button text='button' size={72} radius={12} color='error' disabled />
                <Button text='button' size={72} radius={12} face='outlined' />
                <Button text='button' size={72} radius={12} face='outlined' color='primary' />
                <Button text='button' size={72} radius={12} face='outlined' color='success' />
                <Button text='button' size={72} radius={12} face='outlined' color='warn' />
                <Button text='button' size={72} radius={12} face='outlined' color='error' />
                <Button text='button' size={72} radius={12} face='outlined' color='error' disabled />
            </View>
            <View horizontal wrap gap={16}>
                <Button text='button' secondaryText='second line text' />
                <Button text='button' secondaryText='second line text' color='primary' />
                <Button text='button' secondaryText='second line text' color='success' />
                <Button text='button' secondaryText='second line text' color='warn' />
                <Button text='button' secondaryText='second line text' color='error' />
                <Button text='button' secondaryText='second line text' color='error' disabled />
                <Button text='button' secondaryText='second line text' face='outlined' />
                <Button text='button' secondaryText='second line text' face='outlined' color='primary' />
                <Button text='button' secondaryText='second line text' face='outlined' color='success' />
                <Button text='button' secondaryText='second line text' face='outlined' color='warn' />
                <Button text='button' secondaryText='second line text' face='outlined' color='error' />
                <Button text='button' secondaryText='second line text' face='outlined' color='error' disabled />
            </View>
            <View horizontal wrap gap={16}>
                <Button text='button' secondaryText='second line text' size={72} radius={24} />
                <Button text='button' secondaryText='second line text' size={72} radius={24} color='primary' />
                <Button text='button' secondaryText='second line text' size={72} radius={24} color='success' />
                <Button text='button' secondaryText='second line text' size={72} radius={24} color='warn' />
                <Button text='button' secondaryText='second line text' size={72} radius={24} color='error' />
                <Button text='button' secondaryText='second line text' size={72} radius={24} color='error' disabled />
                <Button text='button' secondaryText='second line text' size={72} radius={24} face='outlined' />
                <Button
                    text='button'
                    secondaryText='second line text'
                    size={72}
                    radius={24}
                    face='outlined'
                    color='primary'
                />
                <Button
                    text='button'
                    secondaryText='second line text'
                    size={72}
                    radius={24}
                    face='outlined'
                    color='success'
                />
                <Button
                    text='button'
                    secondaryText='second line text'
                    size={72}
                    radius={24}
                    face='outlined'
                    color='warn'
                />
                <Button
                    text='button'
                    secondaryText='second line text'
                    size={72}
                    radius={24}
                    face='outlined'
                    color='error'
                />
                <Button
                    text='button'
                    secondaryText='second line text'
                    size={72}
                    radius={24}
                    face='outlined'
                    color='error'
                    disabled
                />
            </View>
        </Container>
    )
}
