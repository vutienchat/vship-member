import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Page from 'components/Page';
import type { NextPage } from 'next';
import NextLink from 'next/link';

const NotFound: NextPage = () => {
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page title="Lỗi: Không tìm thấy trang">
      <Box
        component="main"
        sx={{
          display: 'grid',
          placeContent: 'center',
          flexGrow: 1,
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            variant={mobileDevice ? 'h4' : 'h1'}
            gutterBottom
          >
            Lỗi 404 - Không tìm thấy trang
          </Typography>
          <Typography
            align="center"
            sx={{ color: 'text.secondary' }}
            variant="subtitle2"
          >
            Trang bạn đang tìm không có ở đây, vui lòng thử lại với trang khác
            hoặc trở về trang chủ.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <NextLink href="/" passHref>
              <Button component="a" variant="outlined">
                Trở lại Trang chủ
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFound;
