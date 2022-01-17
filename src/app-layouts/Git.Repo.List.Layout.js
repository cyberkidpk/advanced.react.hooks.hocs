import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import './layout.index.css';
import 'antd/dist/antd.css';
import useCURDOps from '../app-hooks/app.curd.ops';
import RequestPayloadModel from '../app-models/request.payload';

const GitRepoLayout = () => {
  // const [refresh, setRefresh] = useState(new Date());

  const requestPayloadModel = RequestPayloadModel();
  requestPayloadModel.url = '/posts';
  const { resp, error, spinner } = useCURDOps(requestPayloadModel.getGETPayload());

  useEffect(() => {
    // setRefresh(new Date());
    console.log(requestPayloadModel);
  }, [resp, error, spinner]);
  return (
    <Row className="vh100 ">
      <Col className="vh100 justCentAlCent" span={12}>
        <div>
          LEFT COMPONENT
        </div>
      </Col>
      <Col className="vh100 justCentAlCent" span={12}>
        RIGHT COMPONENT
      </Col>
    </Row>
  );
};
export default GitRepoLayout;
