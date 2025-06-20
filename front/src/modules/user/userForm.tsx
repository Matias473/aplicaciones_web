import { Form, Input, Button } from 'antd';

export default function UserForm() {
  const [formUser] = Form.useForm();

  const handleSubmit = () => {
    const values = formUser.getFieldsValue();
    console.log('Todos los datos del formulario: ', values);
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        marginTop: '40px',
        padding: '24px',
        border: '1px solid #f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <Form
        name="user-form"
        layout="horizontal"
        form={formUser}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Por favor ingresa el username' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Por favor ingresa la contraseña' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Por favor ingresa el email' },
            { type: 'email', message: 'El email no es válido' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" onClick={handleSubmit}>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}