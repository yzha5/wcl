import { IconName, iconSelect } from '../pkgs/icon/src'
import './icon.css'

const iconNames: IconName[] = [
    'Airplane',
    'AlignBetween',
    'AlignBottom',
    'AlignCenter',
    'AlignLeft',
    'AlignMiddle',
    'AlignRight',
    'AlignStretch',
    'AlignTextCenter',
    'AlignTextJustify',
    'AlignTextLeft',
    'AlignTextRight',
    'AlignTop',
    'Alipay',
    'Aliyun',
    'Aliyundrive',
    'Android',
    'App',
    'Apple',
    'Archive',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'Audi',
    'AutoComplete',
    'Backplate',
    'Badge',
    'Baidu',
    'Baidupan',
    'Barcode',
    'Bell',
    'Benz',
    'Bike',
    'Bilibili',
    'Bluetooth',
    'Bmw',
    'Breadcrumb',
    'Button',
    'Calculator',
    'Calendar',
    'Car',
    'Celsius',
    'Chair',
    'Chando',
    'Char',
    'Charger',
    'Chrome',
    'Cloud',
    'Code',
    'Command',
    'Container',
    'Copy',
    'Corss',
    'CorssCircle',
    'CreditCard',
    'Css',
    'Cup',
    'Desk',
    'Dialog',
    'Divider',
    'Down',
    'Download',
    'DryingRack',
    'Earphone',
    'Edit',
    'Editor',
    'Envelope',
    'Error',
    'ExpansionPanel',
    'Facebook',
    'Facemask',
    'Fahrenheit',
    'Famale',
    'Fan',
    'Figma',
    'Flashlight',
    'Fog',
    'Fork',
    'Forward',
    'Gear',
    'Golang',
    'Google',
    'Grid',
    'Heart',
    'HeavyRain',
    'HighRail',
    'History',
    'Home',
    'Honda',
    'Hongqi',
    'Html5',
    'I12123',
    'I12306',
    'Info',
    'Innisfree',
    'Input',
    'Italic',
    'Jd',
    'Key',
    'Keyboard',
    'Ladder',
    'Left',
    'LightRain',
    'Link',
    'Lipsalve',
    'List',
    'ListOrder',
    'ListTag',
    'Loading',
    'Lock',
    'Locked',
    'Male',
    'Menu',
    'Minus',
    'MobilePhone',
    'Modal',
    'ModerateRain',
    'Monitor',
    'Moon',
    'MoreHorizontal',
    'MoreVertical',
    'Mouse',
    'MultipleChoice',
    'Next',
    'Notebook',
    'NumberInput',
    'Pad',
    'Pagination',
    'Pause',
    'Pc',
    'Pinter',
    'Plant',
    'Play',
    'Plus',
    'Popover',
    'Previous',
    'Progress',
    'Qrcode',
    'Quote',
    'Refresh',
    'Rewind',
    'Right',
    'Rocket',
    'Scan',
    'Scheme',
    'Search',
    'Share',
    'Shemale',
    'Ship',
    'Shirt',
    'ShoppingCart',
    'ShortSkirt',
    'Shuangxi',
    'Sidebar',
    'Skirt',
    'Slider',
    'Smog',
    'Snow',
    'Spaceship',
    'Spoon',
    'Star',
    'Step',
    'Stool',
    'SubScript',
    'Subway',
    'Success',
    'Sun',
    'SunnyAndCloudy',
    'SuperScript',
    'Tab',
    'Table',
    'Taobao',
    'Television',
    'Terminal',
    'TextBold',
    'TextDelete',
    'TextIndent',
    'TextReIndent',
    'TextStrikethrough',
    'TextUnderline',
    'Thunder',
    'Tick',
    'TickCircle',
    'Tip',
    'Toggle',
    'Tool',
    'Toutiao',
    'Train',
    'Translate',
    'Trousers',
    'Truck',
    'Tshirt',
    'Unlink',
    'Unlock',
    'Up',
    'Upload',
    'User',
    'UserAvatar',
    'Vlc',
    'Volume',
    'Vscode',
    'Vw',
    'Warn',
    'Window',
    'Windows',
    'Wuling',
]

export default function IconPage() {
    return (
        <div className='icons-container'>
            {iconNames.map((v, i) => {
                const Icon = iconSelect(v)
                return (
                    <div className='icon-content' key={i}>
                        <div className='icon-box'>
                            <Icon />
                        </div>
                        {v}
                    </div>
                )
            })}
        </div>
    )
}