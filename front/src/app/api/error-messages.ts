import { IValidation } from 'ipc/types';

export const messages: IValidation = {
    path_not_valid: 'Incorrect file path',
    password_not_valid: 'Password is not valid',
    gas_too_low: 'The transaction was rejected because of insufficient gas',
    password_not_match: 'Password does not match',
    wallet_allready_exists: 'Already exist',
    password_required: 'Password is required',
    wallet_name_length: 'Name length must be in range 1..20',
    name_required: 'Name is required',
    password_length: 'Password must be at least 8 character',
    account_already_exists: 'Account already exists',
    select_file: 'Please select file',
    wait_your_tokens: 'Give us one moment. We sent SNM from Mars!',
    give_me_more: 'Give me SONM tokens!',
    insufficient_funds: 'Insufficient funds for gas * price + value',
    required_params_missed: 'Required parameter missed',
};

export function getMessageText(code: string) {
    return messages[code] || code;
}

export default messages;
