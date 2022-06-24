import Container from '../pkgs/components/container/src'
import Dropdown from '../pkgs/components/dropdown/src'
import View from '../pkgs/components/view/src'

export default function DropdownPage() {
    return (
        <Container>
            <Dropdown label='label' items={[]} />
            <Dropdown label='label' inlineLabel items={[]} />
            <Dropdown label='label' inlineLabel items={[]} color='primary' />
            <Dropdown label='label' inlineLabel items={[]} color='info' />
            <Dropdown label='label' inlineLabel items={[]} color='success' />
            <Dropdown label='label' inlineLabel items={[]} color='warn' />
            <Dropdown label='label' inlineLabel items={[]} color='error' />
            <Dropdown label='label' inlineLabel items={[]} color='gray' />
        </Container>
    )
}
