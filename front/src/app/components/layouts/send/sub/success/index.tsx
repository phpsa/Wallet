import * as React from 'react';
import * as cn from 'classnames';
import { Header } from 'app/components/common/header';

interface IProps {
    className?: string;
    onClickHistory: () => void;
    onClickSend: () => void;
}

// TODO replace DIV and SPAN with A

export class SendSuccess extends React.PureComponent<IProps, any> {
    protected handleClickHistory = this.props.onClickHistory.bind(
        undefined,
        'all',
        'all',
    );

    public render() {
        return [
            <Header className="sonm-send-success__header" key="header">
                Transaction has been sent
            </Header>,
            <div
                className={cn('sonm-send-success', this.props.className)}
                key="success"
            >
                <button
                    onClick={this.handleClickHistory}
                    className="sonm-send-success__button"
                >
                    <div className="sonm-send-success__icon-history" />
                    <div className="sonm-send-success__label">
                        Transaction history
                    </div>
                </button>
                <button
                    onClick={this.props.onClickSend}
                    className="sonm-send-success__button"
                    tabIndex={0}
                >
                    <div className="sonm-send-success__icon-send" />
                    <div className="sonm-send-success__label">
                        New transaction
                    </div>
                </button>
            </div>,
        ];
    }
}

export default SendSuccess;
