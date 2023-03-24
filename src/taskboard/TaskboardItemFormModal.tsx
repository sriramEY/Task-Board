import { useEffect, useRef } from 'react';
import { Modal, Form, ModalProps, Input } from 'antd';
import { TaskboardItem } from './TaskboardTypes';

export type TaskboardItemFormValues = Pick<
  TaskboardItem,
  //extra fields added
  'name' | 'title' | 'description' | 'updates' | 'startDate' | 'endDate'
>;

type TaskboardItemFormModalProps = Pick<ModalProps, 'visible'> & {
  initialValues: TaskboardItemFormValues;
  onCancel: VoidFunction;
  onOk: (values: TaskboardItemFormValues) => void;
};

function TaskboardItemFormModal({
  visible,
  initialValues,
  onCancel,
  onOk,
}: TaskboardItemFormModalProps) {
  const [form] = Form.useForm<TaskboardItemFormValues>();

  const inputRef = useRef<Input>(null);

  useEffect(() => {
    if (visible) {
      // Focus on the first input when the modal is opened
      inputRef.current?.focus();
      form.resetFields();
    }
  }, [form, visible]);


  interface taskData {
    name: string;
    title: string;
    description: string;
    updates: string;
    startDate: string;
    endDate?: string;
  }

  //creating object
  var taskDetails: taskData

  return (
    <Modal
      title="Add Item"
      visible={visible}
      destroyOnClose
      // To make dynamically changing initialValues work with Form
      forceRender
      onCancel={onCancel}
      onOk={() => form.submit()}
    >
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => {
          onOk(values);
          form.resetFields();
          onCancel();
        }}
      >
  {/* //Name field added in the form */}
     <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: "'Name' is required" },
            {
              max: 100,
              message: "'Name' can not be longer than 100 characters",
            },
          ]}
        >
         <Input ref={inputRef} autoFocus />
        </Form.Item>

        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: "'Title' is required" },
            {
              max: 100,
              message: "'Title' can not be longer than 100 characters",
            },
          ]}
        >
          <Input ref={inputRef} />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "'Description' is required" },
            {
              max: 400,
              message: "'Description' can not be longer than 400 characters",
            },
          ]}
        >
          <Input ref={inputRef} />
        </Form.Item>

         {/* //extra fields added */}
        <Form.Item
          name="updates"
          label="Updates"
          rules={[
            { required: false, message: "Updates" },
            {

              message: "'Updates' can not be longer than 100 characters",
            },
          ]}
        >
         <Input.TextArea rows={4} />
        </Form.Item>

        {/* //placeholder need to be added */}
        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[
            { required: true, message: "'Start Date' is required" },
            {
              max: 100,
              message: "'Start Date' can not be longer than 100 characters",
            },
          ]}
        >
          <Input ref={inputRef} />
        </Form.Item>
        <Form.Item
          name="endDate"
          label="End Date"
          rules={[
            { required: false, message: "'End Date' is required" },
            {
              max: 100,
              message: "'End Date' can not be longer than 100 characters",
            },
          ]}
        >
          <Input ref={inputRef} />
        </Form.Item>
      </Form>
    </Modal>
  );
  console.log(Form.Item.toString())
}

export default TaskboardItemFormModal;
