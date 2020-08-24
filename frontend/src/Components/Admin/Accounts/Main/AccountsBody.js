import React from 'react';
import AccountsForm from './AccountsForm';
import AccountsTable from './AccountsTable';

function AccountsBody() {
    return (
        <div className="accounts-body">
            <AccountsForm />
            <AccountsTable />
        </div>
    )
}

export default AccountsBody;