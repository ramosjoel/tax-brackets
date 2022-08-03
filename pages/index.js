import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import {
  Button,
  Col,
  Collapse,
  Container,
  Grid,
  Input,
  Progress,
  Row,
  Spacer,
  Switch,
  Table,
  Text,
  useInput,
  useTheme 
} from '@nextui-org/react'

export const SunIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    if (filled) {
          return (
                  <svg
                    width={size || width || 24}
                    height={size || height || 24}
                    viewBox="0 0 24 24"
                    {...props}
                  >
                    <g fill={fill}>
                      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
                    </g>
                  </svg>
                );
        }
    return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              fill={fill}
              d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19H12.998V22H10.998zM10.998 2H12.998V5H10.998zM1.998 11H4.998V13H1.998zM18.998 11H21.998V13H18.998z"
            ></path>
            <path
              fill={fill}
              transform="rotate(-45.017 5.986 18.01)"
              d="M4.487 17.01H7.487V19.01H4.487z"
            ></path>
            <path
              fill={fill}
              transform="rotate(-45.001 18.008 5.99)"
              d="M16.508 4.99H19.509V6.99H16.508z"
            ></path>
            <path
              fill={fill}
              transform="rotate(-134.983 5.988 5.99)"
              d="M4.487 4.99H7.487V6.99H4.487z"
            ></path>
            <path
              fill={fill}
              transform="rotate(134.999 18.008 18.01)"
              d="M17.008 16.51H19.008V19.511000000000003H17.008z"
            ></path>
          </svg>
        );
};

export const MoonIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    if (filled) {
          return (
            <svg
              width={size || width || 24}
              height={size || height || 24}
              viewBox="0 0 24 24"
              {...props}
            >
                <path
                d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                fill={fill}
              />
              </svg>
            );
        }
    return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              fill={fill}
              d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"
            ></path>
          </svg>
        );
};

const usdFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
const formatPercent = (num) => parseFloat(num*100).toFixed(2)+'%'

const caTaxes = [
  {rate: 0.01, low: 0, high: 8932, description: '1% of taxable income'},
  {rate: 0.02, low: 8933, high: 21175, description: '$89.32 plus 2% of the amount over $8,932'},
  {rate: 0.04, low: 21176, high: 33421, description: '$334.18 plus 4% of the amount over $21,175'},
  {rate: 0.06, low: 33422, high: 46394, description: '$824.02 plus 6% of the amount over $33,421'},
  {rate: 0.08, low: 46395, high: 58364, description: '$1,602.40 plus 8% of the amount over $46,394'},
  {rate: 0.093, low: 58635, high: 299508, description: '$2,581.60 plus 9.3% of the amount over $58,634'},
  {rate: 0.103, low: 299509, high: 359407, description: '$24,982.88 plus 10.3% of the amount over $299,508'},
  {rate: 0.113, low: 359408, high: 599012, description: '$58,227.85 plus 12.3% of the amount over $599,012'},
  {rate: 0.123, low: 599013, high: Infinity, description: '$31,152.48 plus 11.3% of the amount over $359,407'},
]

const federalTaxes = [
  {rate: 0.1, low: 0, high: 9875, description: '10% of taxable income'},
  {rate: 0.12, low: 9876, high: 40125, description: '$987.50 plus 12% of the amount over $9,875'},
  {rate: 0.22, low: 40126, high: 85525, description: '$4,617.50 plus 22% of the amount over $40,125'},
  {rate: 0.24, low: 85526, high: 163300, description: '$14,605.50 plus 24% of the amount over $85,525'},
  {rate: 0.32, low: 163301, high: 207350, description: '$33,271.50 plus 32% of the amount over $163,300'},
  {rate: 0.35, low: 207351, high: 518400, description: '$47,367.50 plus 35% of the amount over $207,350'},
  {rate: 0.37, low: 518401, high: Infinity, description: '$156,235 plus 37% of the amount over $518,400'},
]

const PayPeriodButtons = ({ setPayPeriods }) => {
  return (
    <Button.Group size="xl" color="gradient" bordered>
      <Button onPress={(e) => setPayPeriods(12)} value={12}>12</Button>
      <Button onPress={(e) => setPayPeriods(24)} value={24}>24</Button>
      <Button onPress={(e) => setPayPeriods(26)} value={26}>26</Button>
    </Button.Group>
  )
}

const PayPeriodTable = ({ 
    theme,
    grossIncome, payPeriods,
    contrib401k, contribDental, contribHealth, contribVision,
  }) => {
  const incomePerPayPeriod = parseFloat(grossIncome) / payPeriods
  let total401k = 0
  let totalDental = 0
  let totalHealth = 0
  let totalVision = 0
  let totalNetWages = 0
  const totalDeductions = contrib401k +
    contribDental +
    contribHealth +
    contribVision
  for (let i=0; i<payPeriods; i++) { 
    total401k += contrib401k
    totalDental += contribDental
    totalHealth += contribHealth
    totalVision += contribVision
    totalNetWages += incomePerPayPeriod - totalDeductions
  }

  return (
    <Table
      compact
      bordered
      lined
      hoverable
      xs={2}
      containerCss={{'@md': {width: '400px'}}}
      aria-label="Pay-period table"
    >
      <Table.Header>
        <Table.Column width={6} align='end'>Description &nbsp;</Table.Column>
        <Table.Column width={6}>Amount</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell><Text align='right'>Gross Income per Pay Period</Text></Table.Cell>
          <Table.Cell><Text id='gross-income-per-pay-period'>{usdFormatter.format(incomePerPayPeriod)}</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text align='right'>Total Deductions per Pay Period</Text></Table.Cell>
          <Table.Cell>
            <Text id='total-deductions-per-pay-period' style={{color: totalDeductions > 0 ? theme.colors.success.value : null}}>
              {usdFormatter.format(totalDeductions)}
            </Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text size="0.9rem" align='right'>401k</Text></Table.Cell>
          <Table.Cell><Text id='total-401k-contrib' size="0.9rem" >{usdFormatter.format(contrib401k)}</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text size="0.9rem" align='right'>Dental</Text></Table.Cell>
          <Table.Cell><Text id='total-dental-contrib' size="0.9rem">{usdFormatter.format(contribDental)}</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text size="0.9rem" align='right'>Health</Text></Table.Cell>
          <Table.Cell><Text id='total-health-contrib' size="0.9rem">{usdFormatter.format(contribHealth)}</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text size="0.9rem" align='right'>Vision</Text></Table.Cell>
          <Table.Cell><Text id='total-vision-contrib' size="0.9rem">{usdFormatter.format(contribVision)}</Text></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><Text align='right'>Net Income per Pay Period</Text></Table.Cell>
          <Table.Cell><Text id='net-income-per-pay-period' >{usdFormatter.format(incomePerPayPeriod - totalDeductions)}</Text></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

const TaxBracketTable = ({ taxableIncome, brackets, handleUpdate, theme }) => {
  let remainingIncome = taxableIncome
  let remainingIncomes = []
  let taxes = 0

  return (
    <Table
      bordered
      // selectionMode='multiple'
      // striped
      sticked
      aria-label="Tax-bracket table"
      css={{
        height: "auto",
          minWidht: "100%"
      }}
    >
      <Table.Header>
        <Table.Column>Tax Rate</Table.Column>
        <Table.Column>Low</Table.Column>
        <Table.Column>High</Table.Column>
        <Table.Column>Tax</Table.Column>
        <Table.Column>Remaining Income</Table.Column>
        <Table.Column>Description</Table.Column>
      </Table.Header>
      <Table.Body>
        { brackets.map((taxRate, idx) => {
          let bracketAmount = 0
          if (remainingIncome > taxRate.high) {
            bracketAmount = (taxRate.high - taxRate.low) * taxRate.rate
            taxes += bracketAmount
            remainingIncome = remainingIncome - bracketAmount
            remainingIncomes.push(remainingIncome)
          } else if (remainingIncome > taxRate.low) {
            bracketAmount = (remainingIncome - taxRate.low) * taxRate.rate
            taxes += bracketAmount
            remainingIncome = 0
            remainingIncomes.push(remainingIncome)
          } else {
            bracketAmount = 0
            remainingIncomes.push(0)
          }
          handleUpdate(taxes)
          return (
            <Table.Row key={idx}>
              <Table.Cell>{formatPercent(taxRate.rate)}</Table.Cell>
              <Table.Cell css={{color: '$gray800'}}>{usdFormatter.format(taxRate.low)}</Table.Cell>
              <Table.Cell css={{color: '$gray800'}}>{usdFormatter.format(taxRate.high)}</Table.Cell>
              <Table.Cell>{usdFormatter.format(bracketAmount)}</Table.Cell>
              <Table.Cell>{usdFormatter.format(remainingIncomes[idx])}</Table.Cell>
              <Table.Cell css={{color: '$gray800'}}>{taxRate.description}</Table.Cell>
            </Table.Row>
        )})}
        <Table.Row key={brackets.length}>
          <Table.Cell><Text size='1.25rem'>Total</Text></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <Text size='1.5rem' style={{color: theme.colors.warning.value}}>
              {usdFormatter.format(taxes)}
            </Text>
          </Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell>{taxes > 0 ? 'OMG, ew!' : ''}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default function Home() {
  const { setTheme } = useNextTheme();
  const { theme, isDark, type } = useTheme();
  const [ socialSecurityTax, setSocialSecurityTax ] = useState();
  const [ medicareTax, setMedicareTax ] = useState();
  const [ disabilityTax, setDisabilityTax ] = useState();
  const [ income, setIncome ] = useState(0.0);
  const [ stateTaxes, setStateTaxes ] = useState();
  const [ fedTaxes, setFedTaxes ] = useState();
  const [ totalTaxes, setTotalTaxes ] = useState(0.0);
  const [ taxableIncome, setTaxableIncome ] = useState(0.0);

  const [ payPeriods, setPayPeriods ] = useState(26);
  const [ contrib401k, setContrib401k ] = useState(0.0)
  const [ contribDental, setContribDental ] = useState(0.0)
  const [ contribHealth, setContribHealth ] = useState(0.0)
  const [ contribVision, setContribVision ] = useState(0.0)
  const { value, reset, bindings } = useInput("")

  const socialSecurityTaxRate = 0.062
  const medicareTaxRate = 0.0145
  const disabilityTaxRate = 0.011
  
  const validateIncome = (value) => {
    return value.match(/^[0-9]/)
  }

  useEffect(() => {
    setSocialSecurityTax(income * socialSecurityTaxRate)
    setMedicareTax(income * medicareTaxRate)
    setDisabilityTax(income * disabilityTaxRate)
    const contributions = (
      (contrib401k * payPeriods) + (contribDental * payPeriods) + (contribHealth * payPeriods) + (contribVision * payPeriods))
    const newTaxableIncome = income > 0 ? income - contributions : 0
    setTaxableIncome(newTaxableIncome)
    setTotalTaxes(stateTaxes + fedTaxes + socialSecurityTax + medicareTax + disabilityTax)
    console.table({ income, taxableIncome, socialSecurityTax, medicareTax, disabilityTax })
  }, [income, taxableIncome, payPeriods, stateTaxes, fedTaxes,  contrib401k, contribDental, contribHealth, contribVision])

  return (
    <div>
      <Head>
        <title>CA Tax Brackets</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>

      <Container md>
        <Spacer y={6} />

        <Text h1 align="center" css={{textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>Tax-Bracket Calculator</Text>
        <Spacer />

        <Text h3 align="center">Because fuck calculating this shit...</Text>
        <Spacer />

        <Container align="center">
          <Switch
            checked={isDark}
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </Container>
        <Spacer y={4} />

        <br />
        <Text align='center'>Enter your gross income below to see (roughly) how much you'll owe uncle Sam:</Text>
        <Spacer />

        <Container align='center'>
        <Input 
          underlined
          clearable
          size="xl"
          label="Enter your gross income"
          labelLeft="$"
          placeholder="50,000" 
          type="text"
          id="gross-income"
          dataid="gross-income"
          // status="primary"
          pattern="^\d{1,3}(,\d{3})*(\.\d+)?$"
          css={{'-webkit-appearance': 'none'}}
          onChange={(e) => setIncome(parseFloat(e.target.value || 0))} />
        </Container>
        <Spacer />

        <Text align='center' h2>Total Taxes:</Text>
        <Text 
          id='total-taxes'
          align='center'
          size={36} style={{color: theme.colors.error.value}}
        >
          {
            usdFormatter.format(totalTaxes || 0)
          } &nbsp; {
            income > 0 ? '😱' : null
          }
        </Text>
        <Text align='center' h2>Effective Tax Rate: </Text>
        <Text
          align='center'
          id='effective-tax-rate'
          size={36}
          style={{color: theme.colors.error.value}}
        >
          {
            income > 0 ? 
              formatPercent(totalTaxes / income) : 
              formatPercent(0)
          }
        </Text>
        <Container css={{'@md': {width: '60%'}}}>
          <Progress value={income > 0 ? (totalTaxes/income)*100 : 0} shadow color="warning" status="warning" />
        </Container>
        <Spacer />

        {/* <Container align='center'> */}
        <Collapse.Group>
          <Collapse id='deductions' align='center' title="Got Any Deductions?" subtitle="Expand to add retirement and insurance contributions to reduce your taxable income.">
            <Container align='center'>
            <Text align='center' h3>Taxable Income:</Text>
            <Text 
              id='taxable-income'
              align='center'
              size={36} style={{color: taxableIncome < income ? theme.colors.success.value : theme.colors.warning.value}}
            > 
              { usdFormatter.format(taxableIncome > 0 ? taxableIncome : 0) }
            </Text>
            <Container css={{'@md': {width: '60%'}}}>
              <Text>Your <em>Taxable Income</em> is your gross income minus any deductions you have. Contributions to retirement plans and insurance payments can be deducted from your gross income to reduce how much of your income is "taxable."</Text>
            </Container>
            <Spacer />

            { /* 401k Contribution */ }
            <Input 
              underlined
              id='401k-contrib' 
              label="401k contribution"
              labelLeft="$"
              pattern="^\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder="0.00"
              status={contrib401k > 0 ? "success" : "default"}
              onChange={(e) => setContrib401k(parseFloat(e.target.value || 0))} />
            <Spacer />

            { /* Dental Contribution */ }
            <Input 
              underlined
              id='dental-contrib' 
              label="Dental insurance contribution"
              labelLeft="$"
              pattern="^\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder="0.00"
              status={contribDental > 0 ? "success" : "default"}
              onChange={(e) => setContribDental(parseFloat(e.target.value || 0))} />
            <Spacer />

            { /* Health Contribution */ }
            <Input 
              underlined
              id='health-contrib' 
              label="Health insurance contribution"
              labelLeft="$"
              pattern="^\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder="0.00"
              status={contribHealth > 0 ? "success" : "default"}
              onChange={(e) => setContribHealth(parseFloat(e.target.value || 0))} />
            <Spacer />

            { /* Vision Contribution */ }
            <Input 
              underlined
              id='vision-contrib' 
              label="Vision insurance contribution"
              labelLeft="$"
              pattern="^\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder="0.00"
              status={contribVision > 0 ? "success" : "default"}
              onChange={(e) => setContribVision(parseFloat(e.target.value || 0))} />
            <Spacer />

            <Text h3>Pay Periods per Year</Text>
            <PayPeriodButtons setPayPeriods={setPayPeriods} />
            </Container>
            <Spacer />

            <PayPeriodTable
              theme={theme}
              grossIncome={income}
              payPeriods={payPeriods}
              contrib401k={contrib401k}
              contribDental={contribDental}
              contribHealth={contribHealth}
              contribVision={contribVision} />
          </Collapse>
        </Collapse.Group>
        {/* </Container> */}
        <Spacer />

        <Text id='state-taxes' h2>
          California State Tax Brackets: <span style={{color: theme.colors.warning.value}}>{usdFormatter.format(stateTaxes)}</span>
        </Text>
        <Text id='state-tax-rate' h3>
          Percent: <Text span style={{color: theme.colors.warning.value}}>{income > 0 ? formatPercent(stateTaxes / income) : formatPercent(0)}</Text>
        </Text>
        <Spacer />

        <TaxBracketTable
          taxableIncome={taxableIncome}
          brackets={caTaxes}
          handleUpdate={setStateTaxes}
          theme={theme} />
        <Spacer />

        <Text id='federal-taxes' h2>
          Federal Tax Brackets: <span style={{color: theme.colors.warning.value}}>{usdFormatter.format(fedTaxes)}</span>
        </Text>
        <Text id='federal-tax-rate' h3>
          Percent: <Text span style={{color: theme.colors.warning.value}}>{income > 0 ? formatPercent(fedTaxes / income) : formatPercent(0)}</Text>
        </Text>
        <Spacer />

        <TaxBracketTable
          taxableIncome={taxableIncome}
          brackets={federalTaxes}
          handleUpdate={setFedTaxes}
          theme={theme} />
        <Spacer />

      </Container>

      <footer>
        <Spacer />
        <Container align="center">SVDO Science</Container>
        <Spacer />
      </footer>
    </div>
  )
}
