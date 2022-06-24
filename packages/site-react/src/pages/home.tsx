import { Button } from '@wdkx/ui-react'

export default function HomePage() {
    return (
        <div>
            <Button text='测试一下' />
            <Button text='测试一下' secondaryText='次行文本' />
            <Button text='测试一下' secondaryText='次行文本' color='primary' />
            <Button text='测试一下' secondaryText='次行文本' color='info' />
            <Button text='测试一下' secondaryText='次行文本' color='success' />
            <Button text='测试一下' secondaryText='次行文本' color='warn' />
            <Button text='测试一下' secondaryText='次行文本' color='error' />
            <Button face='outlined' text='测试一下' />
            <Button face='outlined' text='测试一下' secondaryText='次行文本' />
            <Button face='outlined' text='测试一下' secondaryText='次行文本' color='primary' />
            <Button face='outlined' text='测试一下' secondaryText='次行文本' color='info' />
            <Button face='outlined' text='测试一下' secondaryText='次行文本' color='success' />
            <Button face='outlined' text='测试一下' secondaryText='次行文本' color='warn' />
            <Button face='outlined' text='测试一下' secondaryText='次行文本' color='error' />
            <Button face='link' text='测试一下' />
            <Button face='link' text='测试一下' secondaryText='次行文本' />
            <Button face='link' text='测试一下' secondaryText='次行文本' color='primary' />
            <Button face='link' text='测试一下' secondaryText='次行文本' color='info' />
            <Button face='link' text='测试一下' secondaryText='次行文本' color='success' />
            <Button face='link' text='测试一下' secondaryText='次行文本' color='warn' />
            <Button face='link' text='测试一下' secondaryText='次行文本' color='error' />
            <Button face='outlined' text='测试一下' secondaryText='次行文本' radius={8} />
            <Button
                face='outlined'
                text='测试一下'
                secondaryText='次行文本'
                size={72}
                radius={8}
            />
        </div>
    )
}
