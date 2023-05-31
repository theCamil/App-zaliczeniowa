import React, { useState, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form as DxForm, Item, Label, ButtonItem, ButtonOptions, RequiredRule } from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
import notify from 'devextreme/ui/notify';
import { useAuth } from '../../contexts/auth';

import './LoginForm.scss';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLoginFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      setLoading(true);
    } else {
      alert('Invalid login credentials!');            
    }    
  }, []);

  return (
    <div className="login-form">
      <form onSubmit={handleLoginFormSubmit}>
        <DxForm>
          <Item
            dataField={'email'}
            editorType={'dxTextBox'}
            editorOptions={emailEditorOptions}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <RequiredRule message="Email is required" />
            <Label visible={false} />
          </Item>
          <Item
            dataField={'password'}
            editorType={'dxTextBox'}
            editorOptions={passwordEditorOptions}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            <RequiredRule message="Password is required" />
            <Label visible={false} />
          </Item>
          <Item
            dataField={'rememberMe'}
            editorType={'dxCheckBox'}
            editorOptions={rememberMeEditorOptions}
          >
            <Label visible={false} />
          </Item>
          <ButtonItem>
            <ButtonOptions
              width={'100%'}
              type={'default'}
              useSubmitBehavior={true}
            >
              <span className="dx-button-text">
                {loading ? (
                  <LoadIndicator width={'24px'} height={'24px'} visible={true} />
                ) : (
                  'Sign In'
                )}
              </span>
            </ButtonOptions>
          </ButtonItem>
          <Item>
            <div className={'link'}>
              <Link to={'/reset-password'}>Forgot password?</Link>
            </div>
          </Item>
        </DxForm>
      </form>
    </div>
  );
};

const emailEditorOptions = { stylingMode: 'filled', placeholder: 'Login' };
const passwordEditorOptions = { stylingMode: 'filled', placeholder: 'Password' };
const rememberMeEditorOptions = { text: 'Remember me', elementAttr: { class: 'form-text' } };

export default LoginForm;
