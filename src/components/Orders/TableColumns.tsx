import Typography from '@mui/material/Typography';
import type { HeadCell, ProColumn } from 'components/ProTable/types';
import { getColumnHelper } from 'components/ProTable/utils/getColumnHelper';
// import useDialog from 'hooks/useDialog';
import { useMemo } from 'react';
import Index from 'components/ProTable/components/Index';
import Selection from 'components/ProTable/components/Selection';
import { ListOrder } from 'types/order';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LinkIconButton from 'components/ProButton/LinkIconButton';
import ActionIconButton from 'components/ProButton/ActionIconButton';
import StepperOrderList from 'components/StepperOrderList';
import ActionButton from 'components/ProButton/ActionButton';
import { ORDER_PATH } from 'constant/route-path';

const columnHelper = getColumnHelper<ListOrder>();

const HEAD_CELLS: HeadCell<ListOrder> = {
  index: 'ID',
  orderCode: 'Đơn hàng',
  sellerName: 'Khách hàng',
  orderStatusId: 'Lộ trình',
  actions: 'Thao tác',
};

interface Props {
  pageNumber: number;
  pageSize: number;
  open: (id: number) => void;
}

const useTableColumns = (props: Props) => {
  const { pageNumber, pageSize, open: handleOpenDialog } = props;
  // const dialog = useDialog();

  const columns: ProColumn<ListOrder> = useMemo(() => {
    return [
      Selection<any>(true),
      Index<any>(pageNumber, pageSize, true),

      columnHelper.accessor('orderCode', {
        id: 'orderCode',
        size: 160,
        header: () => HEAD_CELLS.orderCode,
        cell: (context: any) => (
          <Box>
            <Typography>
              <span style={{ fontWeight: 'bold' }}> Mã vận đơn: </span>
              {context.row.original.orderCode}
            </Typography>

            <Typography>
              <span style={{ fontWeight: 'bold' }}> Trạng thái: </span>
              {context.row.original.searchStatus}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 'bold' }}> Mã vận đơn tại nhật: </span>
              {context.row.original.japanCode}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 'bold' }}> Tên hàng hóa: </span>
              {context.row.original.productName}
            </Typography>
            <Typography>
              <span style={{ fontWeight: 'bold' }}> Cước vận chuyển: </span>
              {context.row.original.jpShippingAmount}
            </Typography>
          </Box>
        ),
        meta: {
          verticalTop: true,
          title: HEAD_CELLS.orderCode,
        },
      }),
      columnHelper.accessor('sellerName', {
        id: 'sellerName',
        size: 120,
        header: () => HEAD_CELLS.sellerName,
        cell: (context: any) => (
          <Box>
            <Typography>
              <span style={{ fontWeight: 'bold' }}> Người gửi: </span>
              {context.row.original.sellerName}
            </Typography>

            <Typography>
              <span style={{ fontWeight: 'bold' }}>Người Nhận: </span>
              {context.row.original.buyerName},{'  '}
              {context.row.original.mobile},{' '}
              {context.row.original.buyerWardsName},{' '}
              {context.row.original.buyerDistrictName},{' '}
              {context.row.original.buyerCityName}
            </Typography>
          </Box>
        ),
        meta: {
          verticalTop: true,

          title: HEAD_CELLS.sellerName,
        },
      }),
      columnHelper.accessor('orderStatusId', {
        id: 'orderStatusId',
        size: 160,
        header: () => HEAD_CELLS.orderStatusId,

        cell: (context: any) => (
          <Typography>
            <Box>
              <StepperOrderList
                orderStatusId={context.row.original?.orderStatusId || 0}
                createdAt={context.row.original?.createdAt || ''}
                confirmAt={context.row.original?.confirmAt || ''}
                jpExportDate={context.row.original?.jpExportDate || ''}
                vnExportDate={context.row.original?.vnExportDate || ''}
                shippingDate={context.row.original?.shippingDate || ''}
                shippingCompleteDate={
                  context.row.original?.shippingCompleteDate || ''
                }
              />
            </Box>
          </Typography>
        ),
        meta: {
          // align: 'center',
          verticalTop: true,
          title: HEAD_CELLS.orderStatus,
        },
      }),

      {
        id: 'actions',
        size: 60,
        enableSorting: false,
        header: () => HEAD_CELLS.actions,
        cell: (context: any) => {
          const JsId = context.row.original.orderCode;
          const idSen = context.row.original.id;
          return (
            <>
              <Stack
                flexDirection="row"
                justifyContent="center
            "
              >
                <ActionIconButton>
                  <ActionButton variant="outlined">In đơn hàng</ActionButton>
                </ActionIconButton>
              </Stack>

              <Stack
                flexDirection="row"
                justifyContent="center
            "
              >
                <ActionIconButton
                  onClick={() => {
                    handleOpenDialog(idSen);
                  }}
                >
                  <ActionButton
                    sx={{ textDecoration: 'none' }}
                    variant="outlined"
                  >
                    Chỉnh sửa đơn hàng
                  </ActionButton>
                </ActionIconButton>
              </Stack>

              <Stack
                flexDirection="row"
                justifyContent="center
            "
              >
                <LinkIconButton to={`${ORDER_PATH}/${JsId}`}>
                  <ActionButton variant="outlined">
                    Xem chi tiết đơn hàng
                  </ActionButton>
                </LinkIconButton>
              </Stack>
            </>
          );
        },
        meta: {
          verticalTop: true,
        },
      },
    ];
  }, [handleOpenDialog, pageNumber, pageSize]);

  return { columns };
};

export default useTableColumns;
