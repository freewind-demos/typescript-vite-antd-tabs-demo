import React, {FC} from 'react';
import {Card, Space, Tabs} from "antd";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <Tabs
            tabPosition={'left'}
            items={[
                {
                    label: 'aaa', key: 'aaa', children:
                        <Space direction={"vertical"} style={{display: 'flex'}}>
                            <Card title={'tab1'}>111</Card>
                        </Space>
                },
                {
                    label: 'bbb', key: 'bbb', children: <Space direction={"vertical"} style={{display: 'flex'}}>
                        <Card title={'tab2'}>222</Card>
                    </Space>
                },
                {
                    label: 'ccc', key: 'ccc', children: <Space direction={"vertical"} style={{display: 'flex'}}>
                        <Card title={'tab3'}>333</Card>
                    </Space>
                },
            ]}/>
    </div>;
}
