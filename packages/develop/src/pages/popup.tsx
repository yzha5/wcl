import { useState } from 'react'
import { Button } from '../pkgs/components/button/src'
import Container from '../pkgs/components/container/src'
import Dropdown from '../pkgs/components/dropdown/src'
import List from '../pkgs/components/list/src'
import Popup from '../pkgs/components/pupup/src'
import View from '../pkgs/components/view/src'

export default function PopupPage() {
    const [isOpen, setOpen] = useState(false)
    return (
        <Container>
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>0</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <Popup
                control={<Button text='test popup' onClick={() => setOpen(!isOpen)} />}
                isOpen={isOpen}
                onOutClick={() => setOpen(false)}
            >
                <p>children0</p>
                <p>children1</p>
                <p>children2</p>
                <p>children3</p>
                <p>children4</p>
                <p>children5</p>
                <p>children6</p>
                <p>children7</p>
                <p>children8</p>
                <p>children9</p>
                <List
                    items={[
                        {
                            key: 0,
                            label: 'aaa',
                            frontIcon: 'ShortSkirt',
                            endIcon: 'Cup',
                            data: { a: 'A', b: 'B' },
                        },
                        {
                            key: 1,
                            label: 'bbbbbbbbbbbbbbb',
                            frontIcon: 'ShortSkirt',
                            endIcon: 'Cup',
                            data: { a: 'A', b: 'B' },
                            color: 'primary',
                        },
                        {
                            key: 2,
                            label: 'ccc',
                            frontIcon: 'ShortSkirt',
                            endIcon: 'Cup',
                            data: { a: 'A', b: 'B' },
                            color: 'info',
                        },
                        {
                            key: 3,
                            label: 'ddd',
                            frontIcon: 'ShortSkirt',
                            endIcon: 'Cup',
                            data: { a: 'A', b: 'B' },
                            color: 'success',
                        },
                    ]}
                />
            </Popup>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
        </Container>
    )
}
