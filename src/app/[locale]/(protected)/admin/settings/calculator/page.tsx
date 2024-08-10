import { getTranslations } from "next-intl/server"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  getEmployeeRanges,
  getFieldOfActivities,
  getOwnershipTypes,
  getServiceCostList,
  getTaxSystems,
  getTimePeriods,
} from "@/server/data-access-layer/calculator"
import FieldOfActivityForm from "./form-activity"
import EmployeeRangeForm from "./form-employee"
import FormOfOwnershipForm from "./form-ownership"
import TimePeriodForm from "./form-period"
import ServiceCostForm from "./form-service-cost"
import TaxSystemForm from "./form-tax"

export default async function CalculatorSettings() {
  const t = await getTranslations()
  const ownershipTypes = await getOwnershipTypes()
  const fieldOfActivities = await getFieldOfActivities()
  const taxSystems = await getTaxSystems()
  const employeeRanges = await getEmployeeRanges()
  const timePeriods = await getTimePeriods()
  const serviceCosts = await getServiceCostList()
  return (
    <div className="space-y-10">
      <Card>
        <CardHeader className="space-y-3.5">
          <CardTitle>
            {t("Pages.Admin.Calculator.options-management-title")}
          </CardTitle>
          <CardDescription>
            {t("Pages.Admin.Calculator.options-management-description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-1.5">
            <h4 className="text-lg font-semibold">
              {t("Components.FormServiceCost.form-of-ownership")}
            </h4>
            <FormOfOwnershipForm optionsData={ownershipTypes} />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-lg font-semibold">
              {t("Components.FormServiceCost.field-of-activity")}
            </h4>
            <FieldOfActivityForm optionsData={fieldOfActivities} />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-lg font-semibold">
              {t("Components.FormServiceCost.tax-system")}
            </h4>
            <TaxSystemForm optionsData={taxSystems} />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-lg font-semibold">
              {t("Components.FormServiceCost.employee-range")}
            </h4>
            <EmployeeRangeForm optionsData={employeeRanges} />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-lg font-semibold">
              {t("Components.FormServiceCost.time-period")}
            </h4>
            <TimePeriodForm optionsData={timePeriods} />
          </div>
        </CardContent>

        {/* <OptionsForm /> */}
      </Card>
      <Card>
        <CardHeader className="space-y-3.5">
          <CardTitle>{t("Pages.Admin.Calculator.title")}</CardTitle>
          <CardDescription>
            {t("Pages.Admin.Calculator.description")}
          </CardDescription>
        </CardHeader>
        <ServiceCostForm
          existingServiceCosts={serviceCosts}
          ownershipTypes={ownershipTypes}
          fieldOfActivities={fieldOfActivities}
          taxSystems={taxSystems}
          employeeRanges={employeeRanges}
          timePeriods={timePeriods}
        />
      </Card>
    </div>
  )
}
