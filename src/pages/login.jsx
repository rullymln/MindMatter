import Button from '../components/Button';
import '../pages/login.css'

function Login() {

    return (
        <>
            <div class="body">
                <div class="box">
                    <div class="mindmatter">
                        <h2>MindMatter</h2>
                    </div>
                    <hr />
                    <div class="sub-header">
                        <p>Silahkan Lengkapi Data Anda</p>
                    </div>
                    <div class="input">
                        <input type="Nama" placeholder='Nama Lengkap' id='NamaLengkap' name='nama' />
                        <input type="E-Mail" placeholder='E-Mail' id='E-Mail' name='email' />
                        <input type="NoHandphone" placeholder='No Handphone' name='nohp' />
                        <input type="password" name="password" id="password" placeholder='Password' />
                    </div>
                    <div class="btn-daftar">
                        <Button
                            name="Daftar" width="100%" height="40px"></Button>
                    </div>
                    <div class="footer">
                    <p>Sudah Punya Akun?</p> <a href="Register">Masuk Sekarang</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
