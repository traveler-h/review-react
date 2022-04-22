import axios, { AxiosResponse } from 'axios';
import React, { Component } from 'react';

import { httpEnun } from '../enums/httpEnums';
import { FilmListProps, FilmState } from '../state/FilmList';

export default class FilmList extends Component<FilmListProps> {
    reying_url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=3395555';
    shangying_url = 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5970059';
    state: FilmState = {
        list: [],
        type: 1
    };

    static getDerivedStateFromProps(nextProps: any): any {
        if (nextProps.type !== undefined) {
            return {
                type: nextProps.type
            };
        }
    }
    async getFileList(url: string) {
        const res: AxiosResponse<any, any> = await axios({
            method: httpEnun.get,
            url: url,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16478525261319486967775233"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        });
        this.setState({
            list: res?.data?.data?.films
        });
    }
    componentDidMount() {
        if (Number(this.props.type) === 1) {
            this.getFileList(this.reying_url);
        } else {
            this.getFileList(this.shangying_url);
        }
    }
    componentDidUpdate(prevProps: any, prevStates: any): void {

        if (this.state.type === prevStates.type) {
            return;
        }
        if (Number(this.state.type) === 1) {
            this.getFileList(this.reying_url);
        } else {
            this.getFileList(this.shangying_url);
        }
    }
    render() {
        return (
            <ul>
                {
                    this.state.list.map(item => {
                        return (<li key={item?.filmId}>{item?.name}</li>);
                    })
                }
            </ul>
        );
    }
}
