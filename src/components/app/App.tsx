import './App.css'
import { Card, ConfigProvider, FloatButton, Input } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useState } from 'react'
import Trie from '../../classes/trie/Trie'
import { SendOutlined } from '@ant-design/icons'

function App() {
    const [root, setRoot] = useState<Trie>()
    const [text, setText] = useState<string>()

    const addChild = (charValue?: string): void => {
        if (!charValue) {
            console.warn('Empty value provided')
            return
        }
        const current = new Trie(charValue, undefined, undefined, root)
        if (!root && current) {
            setRoot(current)
        }
        setText('')
        console.log(root?.toString())
    }
    return (
        <ConfigProvider theme={{}}>
            <Content>
                <Card>
                    <Input
                        placeholder="Add element"
                        value={text}
                        onInput={(value) => setText(value.currentTarget.value)}
                    />
                    <FloatButton
                        tooltip="Submit"
                        icon={<SendOutlined />}
                        onClick={(_) => addChild(text)}
                    />
                </Card>
            </Content>
        </ConfigProvider>
    )
}

export default App
