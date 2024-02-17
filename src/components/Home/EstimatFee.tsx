import { yupResolver } from '@hookform/resolvers/yup';
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import Form from 'components/Form/Form';
import ControllerTextField from 'components/Form/ControllerTextField';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import getMessageError from 'utils/controlMessage';
import useNotification from 'hooks/useNotification';
import { useState } from 'react';
import Regexs from 'utils/Regexs';

interface FormValue {
  weight: string;
}

const validationSchema = yup.object().shape({
  weight: yup
    .string()
    .strict(true)
    .required('Vui lòng nhập trọng lượng')
    .matches(Regexs.number, 'Vui lòng nhập số')
    .default(''),
});

const EstimatFee = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const setNotification = useNotification();
  // const [resultEstimatFee, setResultEstimatFee] = useState<any>([]);

  const { control, handleSubmit } = useForm<FormValue>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: validationSchema.getDefault(),
  });

  const onSubmit = async (data: FormValue) => {
    try {
      setLoading(true);
    } catch (error) {
      const message = getMessageError(error) || 'message.systemError';
      setNotification({
        message: t(message),
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
         Trọng lượng ước tính (Gram)
       </Typography>
       <Box sx={{ py: 2.5 }}>
         <TextField
           size="small"
           sx={{ width: { xs: '100%', sm: '70%' } }}
           InputProps={{
             inputProps: {
               sx: {
                 py: { xs: 1.5 },
               },
             },
             sx: {
               fontSize: theme.typography.body2.fontSize,
             },
           }}
           placeholder="Nhập trọng lượng"
         />
       </Box> */}
      {/* <LoadingButton
        loading={false}
        size="large"
        loadingPosition="start"
        startIcon={<SearchIcon />}
      >
        Tra Cứu
      </LoadingButton> */}
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Trọng lượng ước tính (Gram)
      </Typography>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ py: 2.5, width: { xs: '100%', sm: '70%' } }}>
          <ControllerTextField
            name="weight"
            control={control}
            type="text"
            placeholder={t('Nhập trọng lượng')}
            InputProps={{
              inputProps: {
                sx: {
                  py: { xs: 1.5 },
                },
              },
              sx: {
                fontSize: theme.typography.body2.fontSize,
              },
            }}
          />
        </Box>
        <LoadingButton
          loading={loading}
          size="large"
          loadingPosition="start"
          startIcon={<SearchIcon />}
          type="submit"
        >
          Tra Cứu
        </LoadingButton>
      </Form>
    </Box>
  );
};

export default EstimatFee;
