import { useState } from 'react'
import Container from '../pkgs/components/container/src'
import Input from '../pkgs/components/input/src'
import View from '../pkgs/components/view/src'

export default function InputPage() {
    const [inputValue, setInputValue] = useState('')
    return (
        <Container>
            <View gap={32}>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inlineLabel
                    label='label'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inlineLabel
                    label='label'
                    color='primary'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inlineLabel
                    label='label'
                    color='info'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inlineLabel
                    label='label'
                    color='success'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inlineLabel
                    label='label'
                    color='warn'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inlineLabel
                    label='label'
                    color='error'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inlineLabel
                    label='label'
                    color='gray'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='label'
                    color='#e957c3'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='label'
                    placeholder='Placeholder'
                    size={72}
                    radius={24}
                    color='green'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
                <Input
                    disabled
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    label='label'
                    placeholder='Placeholder'
                    size={72}
                    radius={24}
                    color='red'
                    frontIcon='Terminal'
                    endIcon='Thunder'
                />
            </View>
            <View>input:{inputValue}</View>
        </Container>
    )
}
