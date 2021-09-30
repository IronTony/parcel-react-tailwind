import { render } from 'react-dom';

import { Body } from '~/common/components/Body';
import { Card } from '~/common/components/Card';
import { Page } from '~/common/components/Page';
import { Title } from '~/common/components/Title';

interface AppProps {}

const App: React.FC<AppProps> = () => (
  <Page>
    <Title>{window.__env__.TITLE}</Title>

    <Body>
      <Card>
        {window.__env__.SUBTITLE}
        <div className="py-2">
          Features:
          <ul className="list-disc list-inside">
            <li>Parcel 2</li>
            <li>React 17</li>
            <li>Tailwind CSS 2</li>
            <li>ESLint</li>
            <li>Prettier</li>
          </ul>
        </div>
      </Card>
    </Body>
  </Page>
);

render(<App />, document.getElementById('app'));
