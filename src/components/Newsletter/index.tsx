import React from 'react'
import { Container, FormNewsletter } from './styles'
import axios from "axios"
import validator from 'validator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Newsletter = (): JSX.Element => {
    const [form, setForm] = React.useState({name: '', email: ''})
    const [errors, setErrors] = React.useState({name: '', email: ''})

    const handleInputChange = (event: { target: any; }) => {
        const target = event.target
        const name = target.name
        const value = target.value

        setForm(form => ({
            ...form,
            [name]: value,
        }))
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        let proceed = true

        if (!form.name) {
            proceed = false
            setErrors(errors => ({
                ...errors,
                name: 'Preencha com seu nome completo',
            }))
        } else {
            setErrors(errors => ({
                ...errors,
                name: '',
            }))
        }

        if (!validator.isEmail(form.email)){
            proceed = false
            setErrors(errors => ({
                ...errors,
                email: 'Preencha com um e-mail válido',
            }))
        } else {
            setErrors(errors => ({
                ...errors,
                email: '',
            }))
        }

        if (proceed) {
            axios({
                method: 'POST',
                url: 'https://corebiz-test.herokuapp.com/api/v1/newsletter',
                data: form
            }).then((response) => {
                console.log('response', response)
                if (response.status >= 200 && response.status < 300) {
                    MySwal.fire({
                        title: <strong>Cadastro realizado com sucesso!</strong>,
                        icon: 'success'
                    })
                    e.target.form.reset()
                } else if (response.data.status === 'fail') {
                    MySwal.fire({
                        title: <strong>Ops! Ocorreu um erro.</strong>,
                        html: <i>Tente mais tarde</i>,
                        icon: 'error'
                    })
                    e.target.form.reset()
                }
            })
        }
    }

    return (
        <Container>
            <div className="container">
                <h3>Participe de nossas news com promoções e novidades!</h3>
                <FormNewsletter id="newsletter" >
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Digite seu nome" onChange={handleInputChange} id="input-name" />
                        <span className='error'>{errors.name}</span>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Digite seu email" onChange={handleInputChange} id="input-email" />
                        <span className='error'>{errors.email}</span>
                    </div>
                    <button onClick={handleSubmit} type="submit">Eu quero!</button>
                </FormNewsletter>
            </div>
        </Container>
    )
}

export default Newsletter
