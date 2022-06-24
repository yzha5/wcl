import Container from '../pkgs/components/container/src'
import Dropdown from '../pkgs/components/dropdown/src'
import List from '../pkgs/components/list/src'
import View from '../pkgs/components/view/src'

export default function ListPage() {
    return (
        <Container>
            <List
                items={[
                    {
                        key: 0,
                        label: 'aaa',
                        secondaryText: 'second line',
                        frontIcon: 'ShortSkirt',
                        endIcon: 'Cup',
                        data: { a: 'A', b: 'B' },
                    },
                    {
                        key: 1,
                        label: 'bbb',
                        secondaryText: 'second line',
                        frontIcon: 'ShortSkirt',
                        endIcon: 'Cup',
                        data: { a: 'A', b: 'B' },
                        disabled: true,
                    },
                    {
                        key: 2,
                        label: 'ccc',
                        secondaryText: 'second line',
                        frontIcon: 'ShortSkirt',
                        endIcon: 'Cup',
                        data: { a: 'A', b: 'B' },
                    },
                    {
                        key: 3,
                        label: 'ddd',
                        secondaryText: 'second line',
                        frontIcon: 'ShortSkirt',
                        endIcon: 'Cup',
                        data: { a: 'A', b: 'B' },
                        selected: true,
                    },
                ]}
            />
            <br />
            <List
                onItemClick={(e, item) => console.log(item)}
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
                        label: 'bbb',
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
        </Container>
    )
}
