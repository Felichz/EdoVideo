import { useEffect } from 'react';

// I used this effect hook to reuse the login to dispatch form data with Redux

const useDispatchForm = (
  form,
  setForm,
  formRefs,
  action,
  history,
  redirectTo,
) => {
  useEffect(() => {
    const handleInputValue = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      action(form);
      history.push(redirectTo);
    };

    formRefs.form.current.addEventListener('submit', handleSubmit);
    Object.values(formRefs).forEach((ref) => {
      ref.current.addEventListener('input', handleInputValue);
    });

    return () => {
      formRefs.form.current.removeEventListener('submit', handleSubmit);
      Object.values(formRefs).forEach((ref) => {
        ref.current.removeEventListener('input', handleInputValue);
      });
    };
  }, [formRefs]);
};

export default useDispatchForm;
