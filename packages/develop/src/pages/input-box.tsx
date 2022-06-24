import { useState } from 'react'
import { Button } from '../pkgs/components/button/src'
import Container from '../pkgs/components/container/src'
import InputBox from '../pkgs/components/input-box/src'
import Input from '../pkgs/components/input/src'
import View from '../pkgs/components/view/src'

export default function InputBoxPage() {
    const [inputValue, setInputValue] = useState('')
    return (
        <Container>
            <View gap={32}>
                <InputBox value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <InputBox
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='输入框'
                    placeholder='Placeholder'
                    frontIcon='Airplane'
                />
                <InputBox
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='输入框 禁用'
                    placeholder='Placeholder'
                    disabled
                />
                <InputBox
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='输入框'
                    placeholder='Placeholder'
                    color='primary'
                    endIcon='UserAvatar'
                />
                <InputBox
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='输入框'
                    placeholder='Placeholder'
                    color='info'
                    endIcon='UserAvatar'
                />
                <InputBox
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='输入框'
                    placeholder='Placeholder'
                    color='success'
                    endIcon='UserAvatar'
                />
                <InputBox
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='输入框'
                    placeholder='Placeholder'
                    color='warn'
                    endIcon='UserAvatar'
                />
                <View horizontal>
                    <InputBox
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        label='输入框'
                        placeholder='Placeholder'
                        color='error'
                        endIcon='UserAvatar'
                        styles={{
                            root: {
                                flexGrow: 1,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                            },
                        }}
                    />
                    <Button
                        text='button'
                        secondaryText='second line'
                        color='error'
                        styles={{ root: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } }}
                    />
                </View>
                <InputBox
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='输入框'
                    placeholder='Placeholder'
                    color='primary'
                    size={112}
                    radius={12}
                />
            </View>
            <View>input:{inputValue}</View>
        </Container>
    )
}
