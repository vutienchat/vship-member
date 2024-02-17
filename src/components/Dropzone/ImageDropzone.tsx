import type { SvgIconComponent } from '@mui/icons-material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { DropzoneOptions } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

interface Props extends DropzoneOptions {
  icon?: SvgIconComponent;
  sx?: BoxProps['sx'];
}

const ImageDropzone = (props: Props) => {
  const {
    accept = { 'image/*': ['.png', '.jpeg', '.jpg'] },
    maxFiles,
    maxSize,
    minSize,
    onDrop,
    multiple = false,
    sx,
  } = props;
  const { t } = useTranslation();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxFiles,
    maxSize,
    minSize,
    onDrop,
    multiple,
  });

  return (
    <Wrapper isDragActive={isDragActive} sx={sx} {...getRootProps()}>
      <input {...getInputProps()} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AddPhotoAlternateIcon fontSize="medium" color="action" />
        <Typography variant="caption" align="center" sx={{ mt: 1 }}>
          {t('Chọn hoặc kéo thả tệp để tải lên')}
        </Typography>
        {maxFiles && multiple && (
          <Typography
            variant="caption"
            sx={{ fontWeight: 'bold', color: 'text.secondary' }}
          >
            {`(${t('Tối đa {{maxFiles}} hình ảnh', {
              maxFiles,
            })})`}
          </Typography>
        )}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled(Box)<{ isDragActive: boolean }>(
  ({ theme, isDragActive }) => ({
    display: 'flex',
    flexGrow: 1,
    border: 3,
    borderStyle: 'dashed',
    borderColor: theme.palette.divider,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    maxWidth: 300,
    padding: theme.spacing(2),
    borderRadius: 4,
    ...(isDragActive && {
      backgroundColor: theme.palette.action.active,
      opacity: 0.5,
    }),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: 'pointer',
      opacity: 0.5,
    },
  })
);

export default ImageDropzone;
