import './App.css'
import { Card, ConfigProvider, FloatButton, Input, notification } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React, { useMemo, useState } from 'react'
import Trie from '../../classes/trie/Trie'
import { SendOutlined } from '@ant-design/icons'

const Context = React.createContext({ name: 'Default' })

function App() {
    const [root, setRoot] = useState<Trie>()
    const [text, setText] = useState<string>()
    const [api, contextHolder] = notification.useNotification()
    const contextValue = useMemo(
        () => ({ name: 'Root Value', value: root?.value }),
        [root]
    )

    const openNotification = (value: string, isSuccess: boolean) => {
        if (isSuccess) {
            api.info({
                message: 'Success!!!',
                description: `Added Value ${value} in Trie`,
                placement: 'bottomLeft',
                type: 'success',
                duration: 1,
            })
        } else {
            api.error({
                message: 'Error :(',
                description: `Unable to add ${value} in Trie`,
                placement: 'bottomLeft',
                type: 'error',
                duration: 1,
            })
        }
    }

    const addChild = (charValue?: string): void => {
        setText('')
        if (!charValue) {
            console.warn('Empty value provided')
            openNotification('<Empty>', false)
            return
        }
        const current = new Trie(charValue, undefined, undefined, root)
        if (!root && current) {
            setRoot(current)
        }
        openNotification(charValue, true)
        console.log(root?.toString())
    }
    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <ConfigProvider theme={{}}>
                <Content>
                    <Card>
                        <Input
                            placeholder="Add element"
                            value={text}
                            onInput={(value) =>
                                setText(value.currentTarget.value)
                            }
                            onKeyUp={(event_) => {
                                if (event_.key === 'Enter')
                                    addChild(event_.currentTarget.value)
                            }}
                        />
                        <FloatButton
                            tooltip="Submit"
                            icon={<SendOutlined />}
                            onClick={(_) => addChild(text)}
                        />
                    </Card>
                </Content>
            </ConfigProvider>
        </Context.Provider>
    )
}

export default App
