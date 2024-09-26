import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

export const TestRouting = ({ dictionary, locale }) => (
  <SubMenu label='Test' icon={<i className='ri-user-line' />}>
    <MenuItem href='/about' icon={<i className='ri-information-line' />}>
      About
    </MenuItem>
    <MenuItem href={`/test/list`}>Test</MenuItem>
    {/* <MenuItem href={`/${locale}/test/view`}>{dictionary['navigation'].questions}</MenuItem> */}
    <MenuItem href={`/test/questions`}>Questions</MenuItem>
  </SubMenu>
)
