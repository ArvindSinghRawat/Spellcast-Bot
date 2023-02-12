import './App.css'
import { Button, Card, ConfigProvider, Form, Input, notification } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React, { useMemo, useState } from 'react'
import Trie from '../../classes/trie/Trie'
import { AppstoreAddOutlined } from '@ant-design/icons'

const Context = React.createContext({ name: 'Default' })

function App() {
    const [currentRoot, setRoot] = useState<Trie>()
    const [currentParent, setParent] = useState<string>()
    const [currentChild, setChild] = useState<string>()
    const [api, contextHolder] = notification.useNotification()
    const [addChildForm] = Form.useForm()
    const contextValue = useMemo(
        () => ({ name: 'Root Value', value: currentRoot?.value }),
        [currentRoot]
    )

    const clearForm = () => {
        setChild(undefined)
        setParent(undefined)
        addChildForm.resetFields()
    }

    const openNotification = (value?: string, isSuccess: boolean = false) => {
        if (isSuccess && value) {
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

    const addChildHelper = (parent?: string, child?: string): void => {
        if (!child) {
            console.warn('Empty value for child provided')
            openNotification('<Empty>', false)
            return
        }
        if (!parent) {
            console.warn('Empty value for parent provided')
            openNotification('<Empty>', false)
            return
        }
        let parentNode
        if (currentRoot) {
            parentNode = currentRoot?.firstMatch(parent, 'bfs')
            if (!parentNode) {
                openNotification(`Can't find a parent with value ${child}`)
            }
        } else {
            parentNode = new Trie(parent)
            setRoot(parentNode)
        }
        new Trie(child, undefined, undefined, parentNode)
        openNotification(child, true)
        console.log(currentRoot?.toString())
    }

    const addChild = (): void => {
        const child = currentChild
        const parent = currentParent
        clearForm()
        addChildHelper(parent, child)
    }

    const finish = (values: { parent?: string; child?: string }): void => {
        if (values) {
            clearForm()
            addChildHelper(values.parent, values.child)
        }
    }

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <ConfigProvider theme={{}}>
                <Content>
                    <Card>
                        <Form
                            form={addChildForm}
                            name="add-child"
                            onFinish={(values) => finish(values)}
                            labelCol={{
                                span: 24,
                                sm: { span: 11, offset: 1 },
                                lg: { span: 4, offset: 8 },
                            }}
                            wrapperCol={{
                                span: 24,
                                sm: { span: 11, offset: 1 },
                                lg: { span: 4, offset: 2 },
                            }}>
                            <Form.Item
                                label="Parent"
                                name="parent"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input value of Child',
                                    },
                                    {
                                        len: 1,
                                        message: 'Only 1 character is expected',
                                    },
                                ]}>
                                <Input
                                    placeholder="Parent element"
                                    value={currentParent}
                                    onInput={(value) =>
                                        setParent(value.currentTarget.value)
                                    }
                                    onKeyUp={(event_) => {
                                        if (event_.key === 'Enter') addChild()
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Child"
                                name="child"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input value of Child',
                                    },
                                    {
                                        len: 1,
                                        message: 'Only 1 character is expected',
                                    },
                                ]}>
                                <Input
                                    placeholder="Add element"
                                    value={currentChild}
                                    onInput={(value) =>
                                        setChild(value.currentTarget.value)
                                    }
                                    onKeyUp={(event_) => {
                                        if (event_.key === 'Enter') addChild()
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                tooltip="Submit"
                                wrapperCol={{ offset: 22, lg: { offset: 15 } }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    icon={<AppstoreAddOutlined />}
                                />
                            </Form.Item>
                        </Form>
                    </Card>
                </Content>
            </ConfigProvider>
        </Context.Provider>
    )
}

export default App
