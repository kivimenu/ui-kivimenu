import React from 'react';
import backgroundImage from '../../people.png';

import './signUp.css';

class SignUp extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className='limiter'>
                <div className='container-login100' style={{
                    backgroundImage: `url(${backgroundImage})`,
                    width: '100%',
                    height: '100%'
                }}>
                    <div className='wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33'>
                        <form className='login100-form validate-form flex-sb flex-w'>
                            <span className='login100-form-title p-b-53'>
                                Kayıt ol
					        </span>
                            <div className='p-t-31 p-b-9'>
                                <span className='txt1'>
                                    Adınız
						        </span>
                            </div>
                            <div className='wrap-input100 validate-input' data-validate='Ad is required'>
                                <input className='input100' type='text' name='adiniz' ></input>
                                <span className='focus-input100'></span>
                            </div>
                            <div className='p-t-31 p-b-9'>
                                <span className='txt1'>
                                    Soyadınız
						        </span>
                            </div>
                            <div className='wrap-input100 validate-input' data-validate='Soyad is required'>
                                <input className='input100' type='text' name='soyadiniz' ></input>
                                <span className='focus-input100'></span>
                            </div>
                            <div className='p-t-31 p-b-9'>
                                <span className='txt1'>
                                    Kullanıcı Adı
						        </span>
                            </div>
                            <div className='wrap-input100 validate-input' data-validate='Username is required'>
                                <input className='input100' type='text' name='username' ></input>
                                <span className='focus-input100'></span>
                            </div>

                            <div className='p-t-13 p-b-9'>
                                <span className='txt1'>
                                    Şifre
						        </span>

                                <a href='/forgotpass' className='txt2 bo1 m-l-5'>
                                    Unuttun mu?
						        </a>
                            </div>
                            <div className='wrap-input100 validate-input' data-validate='Password is required'>
                                <input className='input100' type='password' name='pass' ></input>
                                <span className='focus-input100'></span>
                            </div>

                            <div className='container-login100-form-btn m-t-17'>
                                <button className='login100-form-btn'>
                                    Üye ol
						        </button>
                            </div>
                            <div className='w-full text-center p-t-55'>
                                <span className='txt2'>
                                    Zaten bir üyeliğin varsa
						        </span>
                                <br />
                                <a href='/signin' className='txt2 bo1'>
                                    Hemen Oturum Aç!
						        </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp