import { MyTypes } from './app-types';

declare namespace CompRelated {
  type Props<
    MapStateToProps extends (state: MyTypes.RootState) => Record<string, any>,
    MapDispatchToProps extends (
      dispatch: MyTypes.AppDispatch
    ) => Record<string, any>
  > = ReturnType<MapStateToProps> & ReturnType<MapDispatchToProps>;
}
