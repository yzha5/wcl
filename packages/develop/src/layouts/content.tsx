import { Link, Outlet } from 'react-router-dom'
import View from '../pkgs/components/view/src'
import './content.css'

const routes = [
    'color',
    'container',
    'view',
    'icon',
    'button',
    'navbar',
    'input',
    'input-box',
    'typography',
    'dropdown',
    'list',
    'popup',
]
export default function ContentLayout() {
    return (
        <>
            <View horizontal>
                <View sm={3} lg={2} style={{ padding: 16, borderRight: 'solid 1px gray' }}>
                    <ul className='route-list'>
                        {routes.map((v, i) => {
                            return (
                                <li key={v}>
                                    <Link to={`/${v}`}>{v}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </View>
                <View sm={9} lg={10}>
                    <Outlet />
                </View>
            </View>
        </>
    )
}
